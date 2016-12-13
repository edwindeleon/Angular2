import {Injectable} from '@angular/core'
import {Http} from '@angular/http'
import 'rxjs/add/operator/toPromise'
import {Course} from '../common/course'

@Injectable()
export class ApiService{
	constructor( private http: Http ){

	}

	getCourses(){
		let url = '/data/info.json';
	}
}