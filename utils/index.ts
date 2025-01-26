import {
  defineComponent,
  type ComponentOptions,
  type ComponentOptionsMixin,
  type ConcreteComponent,
  type DefineComponent,
} from "vue";

type VueMixin = ComponentOptionsMixin;

type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
  k: infer I
) => void
  ? I
  : never;

type ExtractInstance<T> = T extends ConcreteComponent<infer V>
  ? V
  : T extends ComponentOptions<infer V>
  ? V
  : never;

type MixedComponentOptions<Mixins extends VueMixin[]> =
  Mixins extends (infer T)[]
    ? ComponentOptions<UnionToIntersection<ExtractInstance<T>>>
    : never;

interface MixinUtil {
  extends: (options: ComponentOptions<any>) => DefineComponent<{}, {}, any>;
  withDefineComponent: (
    setup: (props: Record<string, any>) => any
  ) => DefineComponent<{}, {}, any>;
}

export default function mixins<Mixins extends VueMixin[]>(
  ...mixins: Mixins
): MixinUtil {
  return {
    // For Options API
    extends: (options: ComponentOptions<any>) => {
      return defineComponent({
        ...options,
        mixins,
      }) as DefineComponent<{}, {}, any>;
    },
    // For Composition API
    withDefineComponent: (setup: (props: Record<string, any>) => any) => {
      return defineComponent({
        setup,
        mixins,
      }) as unknown as DefineComponent<{}, {}, any>;
    },
  };
}
