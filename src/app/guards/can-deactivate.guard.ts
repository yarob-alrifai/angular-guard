import { CanDeactivateFn } from '@angular/router';

// Define an interface for the component with canDeactivate method
export interface CanComponentDeactivate {
  canDeactivate: () => boolean;
}

// Implement the CanDeactivateFn
export const canDeactivateGuard: CanDeactivateFn<CanComponentDeactivate> = (
  component: CanComponentDeactivate,
  currentRoute,
  currentState,
  nextState
) => {
  return component.canDeactivate ? component.canDeactivate() : true;
};
