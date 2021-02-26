# Shopgate Connect - Engage accordion widget

Display configured content on CMS pages as expandable panels (accordion).

You can check [Demo](./demo/index.md)

## Settings

Widget settings have following values:

    * accordion - (array) array of accordion panels

Each panel has next settings:

    * labelCollapsed (string) - label for collapsed panel
    * labelExpanded (string) - label for expanded panel
    * content (string) - content, also html is supported

## Configure of widget

You can configure widget settings in [Shopgate Merchant admin](https://developer.shopgate.com/custom-widgets)

```html
<!--Widget
{
  "type": "@shopgate-project/widget-accordion/AccordionWidget",
  "settings": {
    "accordion": [
      {
        "labelCollapsed": "Click to see content",
        "labelExpanded": "Hide content",
        "content": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr..."
      }
    ]
  }
}
-->
```

## Extension Configuration

Set the following value in your Shopgate Connect Admin:

* styles - (json) styles for widget elements [see anatomy of widget](./demo/anatomy.jpg)
    * accordion - (json) css rules for accordion wrapper
    * header - (json) css rules for accordion header
    * headerToggle - (json) css rules for accordion toggle wrapper
    * labelExpanded - (json)  css rules for expanded label
    * labelCollapsed - (json)  css rules for collapsed label
    * content - (json)  css rules for content

## Extension Configuration example
```json
{
  "styles": {
    "accordion": {
      "paddingTop": 20
    },
    "headerToggle": {
      "marginBottom": 12
    },  
    "header": {
      "background": "#fefefe"
    }, 
    "labelExpanded": {
      "color": "#900"
    },
    "labelCollapsed": {
      "color": "#e4e4e4"
    },
    "content": null
  }
}
```

## About Shopgate

Shopgate is the leading mobile commerce platform.

Shopgate offers everything online retailers need to be successful in mobile. Our leading
software-as-a-service (SaaS) enables online stores to easily create, maintain and optimize native
apps and mobile websites for the iPhone, iPad, Android smartphones and tablets.
## License
See the [LICENSE](./LICENSE) file for more information.
