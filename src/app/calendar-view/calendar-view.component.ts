import {Component, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {CalendarServiceService} from '../calendar-service.service';
import {Calendar} from '../calendar';
import {Observable, of} from 'rxjs/index';

@Component({
  selector: 'app-calendar-view',
  templateUrl: './calendar-view.component.html',
  styleUrls: ['./calendar-view.component.css']
})
export class CalendarViewComponent implements OnInit {
  cals: Calendar[];

  public orders: Array<any> = [
    {id: 1, but00: '', but0: '1', but1: '2', but2: '3', but3: '4', but4: '5', but5: '6' },
    {id: 2, but00: '7', but0: '8', but1: '9', but2: '10', but3: '11', but4: '12', but5: '13' },
    {id: 3, but00: '14', but0: '15', but1: '16', but2: '17', but3: '18', but4: '19', but5: '20' },
    {id: 4, but00: '21', but0: '22', but1: '23', but2: '24', but3: '25', but4: '26', but5: '27' },
    {id: 5, but00: '28', but0: '29', but1: '30', but2: '31', but3: '', but4: '', but5: '' },
  ];
  public columns: any[] = [
    {id: 'but00', name: 'Mon'},
    {id: 'but0', name: 'Tue'},
    {id: 'but1', name: 'Wed'},
    {id: 'but2', name: 'Thu'},
    {id: 'but3', name: 'Fri'},
    {id: 'but4', name: 'Sat'},
    {id: 'but5', name: 'Sun'}
  ];
  public columnTemplate: Array<any>;

  constructor(private calendarServiceService: CalendarServiceService) {
  }

  ngOnInit() {
    this.getCalendars();

  }

  getCalendars(): void {
    this.calendarServiceService.getAllCalendars().subscribe(heroes => this.cals = heroes.slice(0, 13));
  }

}
