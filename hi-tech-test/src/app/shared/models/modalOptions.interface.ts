import { TemplateRef, ViewContainerRef } from '@angular/core';

export interface ModalOptions {
  size?: string;
  title?: string;
  modalText?: string;
  iconVariation?: boolean;
  tiny?: boolean;
  autoDestroy?: number;
  top?: number;
  left?: number;
}

export interface OpenModalArgs {
  viewContainerRef: ViewContainerRef;
  content: TemplateRef<any>;
  options?: ModalOptions;
}
