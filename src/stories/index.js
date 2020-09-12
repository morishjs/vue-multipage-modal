import {storiesOf} from '@storybook/vue'
//import addons
import {configureViewport, INITIAL_VIEWPORTS} from '@storybook/addon-viewport'
//
import Modal from "@/components/core/Modal";
import RandomPage_1 from "@/components/RandomPage_1";
import RandomPage_2 from "@/components/RandomPage_2";
import RandomPage_3 from "@/components/RandomPage_3";
import RandomPage_4 from "@/components/RandomPage_4";
import RandomPage_5 from "@/components/RandomPage_5";
import {withKnobs} from "@storybook/addon-knobs";

configureViewport({
  viewports: {
    ...INITIAL_VIEWPORTS
  }
});

storiesOf('Components|Modal', module)
    .addDecorator(withKnobs)
    .add('Default', () => ({
      props: {
        width: '400px',
        height: '250px',
        pages: {
          default: [
            {
              title: "비",
              component: RandomPage_1,
            },
            {
              title: "둘",
              component: RandomPage_2,
            },
            {
              title: "기",
              component: RandomPage_3,
            },
            {
              title: "지",
              component: RandomPage_4,
            },
            {
              title: "갑",
              component: RandomPage_5,
            }
          ]
        },
      },

// <Modal width="400px" height="300px" v-show="show" :onComplete="showAlert" :close="closeModal" :pages="pages"/>
      render(h) {
        return (
            <div>
              {h(Modal, {props: {width: this.width, height: this.height, pages: this.pages}})}
            </div>
        )
      }
    }));
