import angular from 'angular';
import uiRouter from 'angular-ui-router';

import datetimepicker from '../../src/components/datetimepicker';
import template from './template.html';
import controller from './controller';

'use strict';

export default angular.module('datetimepickerTest', [
    uiRouter,
    datetimepicker.name
  ])
  .config($stateProvider => {
    'ngInject';
    $stateProvider.state('datetimepicker', {
      url: '/datetimepicker',
      template: '<datetimepicker-test></datetimepicker-test>'
    });
  })
  .component('datetimepickerTest', {
    template,
    controller,
    controllerAs: 'vm'
  });
