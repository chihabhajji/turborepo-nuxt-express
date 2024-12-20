import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Container from '../components/Container.vue';

describe('Container', () => {
  it('is defined', () => {
    const wrapper = mount(Container);
    expect(Container).toBeDefined();
  });

  it('has container class', () => {
    const wrapper = mount(Container);
    expect(wrapper.classes()).toContain('container');
  });

  it('has a slot', () => {
    const wrapper = mount(Container, {
      slots: {
        default: 'Just some random text!',
      },
    });

    expect(wrapper.html()).toContain('Just some random text!');
  });
});
