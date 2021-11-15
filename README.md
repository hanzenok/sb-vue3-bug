# Storybook issue reproduction

Issue:  https://github.com/storybookjs/storybook/issues/13913

# Install
* `npm install` in vue2 folder
* `npm install` in vue3 folder
* `npm install` in vue3_sb64 folder

# Run storybook
* `npm run storybook` in vue2 folder
* `npm run storybook` in vue3 folder
* `npm run storybook` in vue3_sb64 folder


# Issue

  To reproduce

 - vue2, vue3, vue3(sb6.4): 
    1) toggle the switch ON
    2) in controls set disabled to `True`

  Current behaviour

  - vue2: switch is disabled, switch stays ON
  - vue3, vue3(sb6.4): switch is disabled, switch goes to OFF state (issue with re-rendering in Vue3: [issue 13913](https://github.com/storybookjs/storybook/issues/13913))

  Expected behaviour
  
  - vue2: OK
  - vue3, vue3(sb6.4): switch should maintain it's state