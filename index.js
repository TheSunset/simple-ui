import Button from './packages/button/index';
import Segment from './packages/segment/index';
const components = [
  Button,
  Segment
];
const install = function (Vue, opts = {}) {
  // locale.use(opts.locale);
  // locale.i18n(opts.i18n);

  components.forEach(component => {
    Vue.component(component.name, component);
  });

  // Vue.use(InfiniteScroll);
  // Vue.use(Loading.directive);

  // Vue.prototype.$ELEMENT = {
  //   size: opts.size || '',
  //   zIndex: opts.zIndex || 2000
  // };

  //Vue.prototype.$loading = Loading.service;
};
export default {
  version: '1.0.0',
  // locale: locale.use,
  // i18n: locale.i18n,
  install,
  Button,
}

