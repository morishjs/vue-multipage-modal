import { configure, addDecorator } from '@storybook/vue'
import { withOptions } from '@storybook/addon-options';

import Vue from 'vue'

import DefaultLayout from '@/layouts/default'

//setup preview styles
import '@/assets/css/_normalize.scss'

//register layouts
Vue.component('default-layout', DefaultLayout);

addDecorator(
    withOptions({
        name: 'Storybook + Vue',
        url: 'https://github.com/janumedia/vue-storybook-example',
        hierarchyRootSeparator: /\|/,
        selectedAddonPanel: 'storybook/stories/stories-panel'
    })
);

function loadStories() {
    require('../src/stories');
};

configure(loadStories, module);
