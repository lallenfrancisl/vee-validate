import { computed } from 'vue';
import { FormContextSymbol } from './symbols';
import { FormContext } from './types';
import { injectWithSelf, warn } from './utils';

/**
 * Gives access to a form's values
 */
export function useFormValues<TValues extends Record<string, any> = Record<string, any>>() {
  const form = injectWithSelf(FormContextSymbol) as FormContext<TValues> | undefined;
  if (!form) {
    warn('No vee-validate <Form /> or `useForm` was detected in the component tree');
  }

  return computed(() => {
    return form?.values || ({} as Partial<TValues>);
  });
}
