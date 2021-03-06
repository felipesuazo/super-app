import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AttributeState} from '../../reducers/attribute.reducer';
import {Observable} from 'rxjs';
import {selectAttributes} from '../../selectors/attribute.selector';
import {FetchAttributes} from '../../actions/attribute.action';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserModel} from '../../models/user.model';
import {SaveUser} from '../../actions/user.action';

@Component({
  selector: 'app-create-user-form',
  templateUrl: './create-user-form.component.html',
  styleUrls: ['./create-user-form.component.css']
})
export class CreateUserFormComponent implements OnInit {
  @Output() closeForm = new EventEmitter();
  form: FormGroup;
  attributes: Observable<AttributeState>;

  constructor(private store: Store<AttributeState>,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      position: [null, [Validators.required]],
      area: [null, [Validators.required]],
      world: [null, [Validators.required]]
    });

    this.attributes = this.store.pipe(select(selectAttributes));
    this.loadData();
  }

  get f() {
    return this.form.controls;
  }

  loadData() {
    this.store.dispatch(new FetchAttributes('position'));
    this.store.dispatch(new FetchAttributes('area'));
    this.store.dispatch(new FetchAttributes('world'));
  }

  close() {
    this.closeForm.emit();
    this.form.reset();
  }

  add() {
    const user: UserModel = {
      name: this.f.name.value,
      position: this.f.position.value,
      area: this.f.area.value,
      world: this.f.world.value
    };

    this.store.dispatch(new SaveUser(user));
    this.close();
  }

}
