import { Component, OnInit } from '@angular/core';
import * as pysakit from '../_files/pysakit.json';
import * as linjastot from '../_files/linjastot.json';
import * as tiet from '../_files/tiet.json';
import { Route } from '../interfaces/route.interface';
import { Stop } from '../interfaces/stop.interface';

@Component({
	selector: 'app-graph-search',
	templateUrl: './graph-search.component.html',
	styleUrls: [ './graph-search.component.css' ]
})
export class GraphSearchComponent implements OnInit {
	private routes: Array<Route>;
	private lines: { name: string; route: string[] }[] = linjastot['default'];
	private stops: Array<Stop>;

	adjacencyList: Map<string, string[]>;
	possiblePaths: Array<string[]>;
  shortestPath: string[] = null;
	origin: string;
	destination: string;
	foundedRoutes: Set<any>;

	constructor() {
		this.adjacencyList = new Map<string, string[]>();
		this.foundedRoutes = new Set<string[]>();
		this.stops = new Array<Stop>();
		this.possiblePaths = new Array<string[]>();
		this.routes = tiet['default'];

		for (var stop of pysakit['default']) {
			let s = { name: stop, parent: null };
			this.stops.push(s);
		}
	}

	ngOnInit(): void {
		this.initAdjacencyList();
	}

	initAdjacencyList(): void {
		for (let stop of this.stops) {
			this.addNode(stop.name);
		}

		for (let route of this.routes) {
			this.addEdge(route.origin, route.destination);
		}
	}

	addNode(stop: string) {
		this.adjacencyList.set(stop, []);
	}

	addEdge(origin: string, destination: string) {
		this.adjacencyList.get(origin).push(destination);
		this.adjacencyList.get(destination).push(origin);
	}

	calculateRouteLength() {
		var shortest = 9999999;
		for (let path of this.possiblePaths) {
			var duration = 0;
			for (var i = 1; i < path.length; i++) {
				var current = this.routes.find(r => r.origin === path[i - 1] && r.destination === path[i]);
				if (current === undefined) {
					current = this.routes.find(r => r.origin === path[i] && r.destination === path[i - 1]);
				}
				duration += current.duration;
			}

			if (duration < shortest) {
        shortest = duration;
        this.shortestPath = path;
        
				console.log(path.toString() + ' : ' + duration);
			}
    }
    

	}

	findPath(end: string, path: string[] = []) {
		var currentPath = path;
		var prev = this.stops.find((x) => x.name === end);

		path.push(prev.name);

		if (prev.parent !== null) {
			this.findPath(prev.parent, path);
		} else {
			this.possiblePaths.push(path.reverse());
		}
	}

	breadthFirstSearch() {
		const visited = new Set();
    this.possiblePaths = [];
    this.shortestPath = [];
		const queue = [ this.origin ];

		while (queue.length > 0) {
			const currentStop = queue.shift();
			visited.add(currentStop);

			const nextStops = this.adjacencyList.get(currentStop);

			for (let next of nextStops) {
				if (!visited.has(next)) {
					visited.add(next);
					this.stops.find((x) => x.name === next).parent = currentStop;

					queue.push(next);
				}

				if (next === this.destination) {
					//this.calculateRouteLength(route);
					this.findPath(next);
				}
			}
		}

		this.calculateRouteLength();
	}

	depthFirstSearch(org: string, visited = new Set(), route = new Array<string>()) {
		visited.add(org);
		route.push(org);
		const stops = this.adjacencyList.get(org);

		for (const stop of stops) {
			if (stop === this.destination) {
				console.log('DFS found ' + this.destination);
				console.log(route);
				return;
			}

			if (!visited.has(stop)) {
				this.depthFirstSearch(stop, visited, route);
			}
		}
	}
}
