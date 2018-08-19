import { Action } from '@ngrx/store';
import {AttributeModel} from '../models/attribute.model';

export const FETCH_ATTRIBUTES = '[Attributes] Fetch Attributes';
export const FETCH_ATTRIBUTES_SUCCESS = '[Attributes] Fetch Attributes Success';
export const FETCH_ATTRIBUTES_FAILED = '[Attributes] Fetch Attributes Failed';

export class FetchAttributes implements Action {
  readonly type = FETCH_ATTRIBUTES;
  constructor(public payload: string) {}
}

export class FetchAttributesSuccess implements Action {
  readonly type = FETCH_ATTRIBUTES_SUCCESS;
  constructor(public payload: { name: string, attributes: AttributeModel[] }) {}
}

export class FetchAttributesFailed implements Action {
  readonly type = FETCH_ATTRIBUTES_FAILED;
  constructor(public payload: string) {}
}

export type AttributeAction = FetchAttributes | FetchAttributesSuccess | FetchAttributesFailed;
