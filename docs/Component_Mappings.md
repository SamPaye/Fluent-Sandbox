# Component Migration from v8 to v9

This document provides a comprehensive mapping guide for migrating from Fluent UI React v8 to v9 components.

## Getting Started

### Install Fluent UI v9
To begin migration, install the latest Fluent UI React v9 package:

```bash
npm install @fluentui/react-components
```

### Update Imports
Update your component imports to use the v9 components. Use the component mapping table below to assist.

### Refactor Code
Refactor your code to accommodate changes in API, props, and new functionalities provided by v9 components.

## Component Mapping

Here is the mapping of v8 components to their v9 component replacement or equivalent. This table provides a side-by-side comparison of React v8 components and their corresponding counterparts in React v9. Where a direct v9 equivalent doesn't exist, an alternative or note is provided.

**Note:** Blank cells mean that there is not a v9 component (yet) or the component did not exist in v8.

A (🔁) means the v9 component is currently being developed. It may be in preview or not exported from react-components yet. Check out the latest schedule information on the [v9 Component Roadmap](https://github.com/microsoft/fluentui/wiki/Fluent-UI-React-v9-Component-Roadmap).

| React v8 Component | React v9 Component | Notes |
|-------------------|-------------------|-------|
| ActionButton | [Button](https://storybooks.fluentui.dev/react/?path=/docs/components-button-button--docs) | Use `Button` with `iconPosition="before"` for similar functionality. |
| ActivityItem | Not available | No direct equivalent in v9; custom implementation needed. |
| Announced | Not available | No direct equivalent in v9. |
| Breadcrumb | [Breadcrumb](https://storybooks.fluentui.dev/react/?path=/docs/components-breadcrumb--docs) | No major changes; available in v9. |
| Button | [Button](https://storybooks.fluentui.dev/react/?path=/docs/components-button-button--docs) | Unified button API; use `appearance` prop for variants like `PrimaryButton`. |
| Callout | [Popover](https://storybooks.fluentui.dev/react/?path=/docs/components-popover--docs) | Replaced by `Popover`, with enhanced accessibility and customization. |
| Calendar | [CalendarCompat](https://storybooks.fluentui.dev/react/?path=/docs/compat-components-calendar--docs) | Use the compact variant in v9. |
| CommandBar | [Toolbar](https://storybooks.fluentui.dev/react/?path=/docs/components-toolbar--docs) | Similar functionality in v9. |
| CommandBarButton | [Toolbar](https://storybooks.fluentui.dev/react/?path=/docs/components-toolbar--docs) | Similar functionality in v9. |
| CommandButton | [MenuButton](https://storybooks.fluentui.dev/react/?path=/docs/components-button-docs--docs) | Similar functionality in v9. |
| CompoundButton | [CompoundButton](https://storybooks.fluentui.dev/react/?path=/docs/components-button-compoundbutton--docs) | Similar functionality in v9. |
| Charts | [Migration Guide](https://storybooks.fluentui.dev/react/?path=/docs/concepts-migration-from-v8-components-charts-migration--docs) | No direct equivalent in v9. |
| Checkbox | [Checkbox](https://storybooks.fluentui.dev/react/?path=/docs/components-checkbox--docs) | API remains mostly the same in v9. |
| ChoiceGroup | [RadioGroup](https://storybooks.fluentui.dev/react/?path=/docs/components-radiogroup--docs) | Renamed to `RadioGroup` with similar functionality. |
| Coachmark | [TeachingPopover](https://storybooks.fluentui.dev/react/?path=/docs/components-teachingpopover--docs) | Use `TeachingPopover` in v9 for the same functionality. |
| ColorPicker | [ColorPicker](https://storybooks.fluentui.dev/react/?path=/docs/components-colorpicker--docs) | No major changes in v9. |
| ComboBox | [Combobox](https://storybooks.fluentui.dev/react/?path=/docs/components-combobox--docs) | Renamed to `Combobox` with API improvements. |
| CommandBar | [Toolbar](https://storybooks.fluentui.dev/react/?path=/docs/components-toolbar--docs) | CommandBar replaced by `Toolbar` for managing actions. |
| ContextualMenu | [Menu](https://storybooks.fluentui.dev/react/?path=/docs/components-menu-menu--docs) with Button as the MenuTrigger | Use `Menu` in v9 with `MenuTrigger`. |
| DefaultButton (anchor) | [Button](https://storybooks.fluentui.dev/react/?path=/docs/components-button-button--docs) | Use `Button` in v9. |
| DefaultButton (menu) | [MenuButton](https://storybooks.fluentui.dev/react/?path=/docs/components-button-menubutton--docs) | Use `Button` in v9. |
| DatePicker | [DatePickerCompat](https://storybooks.fluentui.dev/react/?path=/docs/compat-components-datepicker--docs) | API remains similar with enhanced theming options. |
| DetailsList | [DataGrid](https://storybooks.fluentui.dev/react/?path=/docs/components-datagrid--docs) | Experimental `DataGrid` in v9 could be a substitute. |
| Dialog | [Dialog](https://storybooks.fluentui.dev/react/?path=/docs/components-dialog--docs) | Refined API, using `open` and `onOpenChange` props. |
| DocumentCard | [Card](https://storybooks.fluentui.dev/react/?path=/docs/components-card-card--docs) | Use `Card` in v9. |
| Dropdown | [Dropdown](https://storybooks.fluentui.dev/react/?path=/docs/components-dropdown--docs) | API and performance enhancements. |
| Fabric | FluentProvider | Use `FluentProvider` for managing themes and global context. |
| Facepile | [AvatarGroup](https://storybooks.fluentui.dev/react/?path=/docs/components-avatargroup--docs) | Replaced by `AvatarGroup` in v9. |
| FocusTrapZone | [Tabster](https://tabster.io/) | Use `Tabster`. |
| FocusZone | [Tabster](https://tabster.io/) | Use `Tabster`. |
| GroupedList | [Tree](https://storybooks.fluentui.dev/react/?path=/docs/components-tree--docs) | Use `Tree` in v9. |
| HoverCard | Not available | No direct equivalent; could use `Popover` with custom behavior. |
| Icon | [@fluentui/react-icons package](https://storybooks.fluentui.dev/react/?path=/docs/icons-overview--docs) | v9 provides more customization options. |
| IconButton | [Button](https://storybooks.fluentui.dev/react/?path=/docs/components-button-button--docs) | v9 provides more customization options. |
| Image | [Image](https://storybooks.fluentui.dev/react/?path=/docs/components-image--docs) | No major changes in v9. |
| Keytips | [Keytips](https://storybooks.fluentui.dev/react/?path=/docs/contrib_packages-react-keytips--docs) | No major changes in v9. |
| Label | [Label](https://storybooks.fluentui.dev/react/?path=/docs/components-label--docs) | Similar functionality in v9. |
| Layer | [Portal](https://storybooks.fluentui.dev/react/?path=/docs/components-portal--docs) | Use `Portal` for similar layering behavior. |
| Link | [Link](https://storybooks.fluentui.dev/react/?path=/docs/components-link--docs) | Available in v9, with better accessibility handling. |
| List | [List](https://storybooks.fluentui.dev/react/?path=/docs/components-list--docs) | Enhanced performance in v9. |
| MarqueeSelection | Not available | No direct equivalent in v9. |
| MessageBar | [MessageBar](https://storybooks.fluentui.dev/react/?path=/docs/components-messagebar--docs) | Available in v9, with better accessibility handling. |
| Modal | [Dialog](https://storybooks.fluentui.dev/react/?path=/docs/components-dialog--docs) | Dialog in v9 serves the modal role with updated API. |
| Nav | [Nav](https://storybooks.fluentui.dev/react/?path=/docs/components-nav--docs) | No major changes; available in v9 with improvements. |
| OverflowSet | [Dialog](https://storybooks.fluentui.dev/react/?path=/docs/components-overflow--docs) | No direct equivalent; consider `Dialog` for overflow menus. |
| Overlay | [Portal](https://storybooks.fluentui.dev/react/?path=/docs/components-portal--docs) | Replaced with `Dialog` in v9. |
| Panel | [Drawer](https://storybooks.fluentui.dev/react/?path=/docs/components-drawer--docs) | Replaced by `Drawer` for side panel navigation. |
| Popup | [Dialog](https://storybooks.fluentui.dev/react/?path=/docs/components-dialog--default) | Replaced by `Dialog`. |
| PeoplePicker | [TagPicker](https://storybooks.fluentui.dev/react/?path=/docs/components-tagpicker--docs) | Replaced by `TagPicker` for improved functionality. |
| Persona | [Persona](https://storybooks.fluentui.dev/react/?path=/docs/components-persona--docs) | No major changes; available in v9 with improvements. |
| Pickers | Not available | No direct equivalent in v9. |
| Pivot, PivotItem | [TabList](https://storybooks.fluentui.dev/react/?path=/docs/components-tablist--docs), [Tab](https://storybooks.fluentui.dev/react/?path=/docs/components-tablist--docs) | Replaced by `TabList` in v9. |
| ProgressIndicator | [ProgressBar](https://storybooks.fluentui.dev/react/?path=/docs/components-progressbar--docs) | Renamed to `ProgressBar` in v9; similar functionality. |
| Rating | [Rating](https://storybooks.fluentui.dev/react/?path=/docs/components-rating--docs) | Available in v9 with slight API refinements. |
| ResizeGroup | Not available | No direct equivalent in v9. |
| ScrollablePane | Not available | No direct equivalent in v9. |
| SearchBox | [SearchBox](https://storybooks.fluentui.dev/react/?path=/docs/components-searchbox--docs) | Available in v9 with updated API and better accessibility. |
| Separator | [Divider](https://storybooks.fluentui.dev/react/?path=/docs/components-divider--docs) | Replaced by `Divider` in v9. |
| Shimmer | [Skeleton](https://storybooks.fluentui.dev/react/?path=/docs/components-skeleton--docs) | Updated to `Skeleton` in v9 for loading states. |
| Slider | [Slider](https://storybooks.fluentui.dev/react/?path=/docs/components-slider--docs) | API enhancements for better customization. |
| SplitButton | [Menu with SplitButton as the Menu Trigger](https://storybooks.fluentui.dev/react/?path=/docs/components-button-splitbutton--docs) | Various updates done in v9. |
| SpinButton | [SpinButton](https://storybooks.fluentui.dev/react/?path=/docs/components-spinbutton--docs) | Available in v9 with improved API. |
| Spinner | [Spinner](https://storybooks.fluentui.dev/react/?path=/docs/components-spinner--docs) | Available in v9 with better control over animations. |
| Stack | [Migration Guide](https://storybooks.fluentui.dev/react/?path=/docs/concepts-migration-from-v8-components-flex-stack--docs), [StackShim](https://storybooks.fluentui.dev/react/?path=/docs/migration-shims-v8-stackshim--playground) | Various changes in v9. |
| SwatchColorPicker | [SwatchPicker](https://storybooks.fluentui.dev/react/?path=/docs/components-swatchpicker--docs) | Replaced by `SwatchPicker` in v9 for color selection. |
| TagPicker | [TagPicker](https://storybooks.fluentui.dev/react/?path=/docs/components-tagpicker--docs) | No major changes; retained as `TagPicker`. |
| TeachingBubble | [TeachingPopover](https://storybooks.fluentui.dev/react/?path=/docs/components-teachingpopover--docs) | Replaced by `TeachingPopover` in v9. |
| Text | [Text](https://storybooks.fluentui.dev/react/?path=/docs/components-text--docs) | Similar functionality in v9. |
| TextField | [Input](https://storybooks.fluentui.dev/react/?path=/docs/components-input--docs) | Replaced by `Input` in v9 for text input functionality. |
| ThemeProvider | [FluentProvider](https://storybooks.fluentui.dev/react/?path=/docs/components-fluentprovider--docs) | Replaced by `FluentProvider` in v9; similar behavior. |
| TimePicker | [TimePickerCompat](https://storybooks.fluentui.dev/react/?path=/docs/compat-components-timepicker--docs) | Replaced by `TimePickerCompat` in v9; similar behavior. |
| ToggleButton | [ToggleButton](https://storybooks.fluentui.dev/react/?path=/docs/components-button-togglebutton--docs) | No major changes in v9. |
| Toggle | [Switch](https://storybooks.fluentui.dev/react/?path=/docs/components-switch--docs) | Renamed to `Switch` in v9; similar behavior. |
| Tooltip | [Tooltip](https://storybooks.fluentui.dev/react/?path=/docs/components-tooltip--docs) | No major changes in v9. |

## New Components in v9

React v9 introduces several new components that were not present in v8:

- **[Accordion](https://storybooks.fluentui.dev/react/?path=/docs/components-accordion--docs)**: Allowing to toggle the display of content by expanding or collapsing sections.
- **[Avatar](https://storybooks.fluentui.dev/react/?path=/docs/components-avatar--docs)**: Replaces `Persona` for rendering user images.
- **[AvatarGroup](https://storybooks.fluentui.dev/react/?path=/docs/components-avatargroup--docs)**: Replaces `Facepile`.
- **[Badge](https://storybooks.fluentui.dev/react/?path=/docs/components-badge-badge--docs)**: Displays text and/or an icon.
- **[CounterBadge](https://storybooks.fluentui.dev/react/?path=/docs/components-badge-counter-badge--docs)**: Displays Badge numerical values.
- **[PresenceBadge](https://storybooks.fluentui.dev/react/?path=/docs/components-badge-presencebadge--docs)**: Displays Badge status.
- **[Carousel](https://storybooks.fluentui.dev/react/?path=/docs/components-carousel--docs)**: Sliding window of elements controlled by previous, next, and direct pagination buttons.
- **[Drawer](https://storybooks.fluentui.dev/react/?path=/docs/components-drawer--docs)**: Replaces `Panel` for side-drawer navigation.
- **[InfoLabel](https://storybooks.fluentui.dev/react/?path=/docs/components-badge-presencebadge--docs)**: An InfoLabel is a Label with an InfoButton at the end.
- **[Popover](https://storybooks.fluentui.dev/react/?path=/docs/components-popover--docs)**: Enhanced version of `Callout` with improved accessibility.
- **[TabList](https://storybooks.fluentui.dev/react/?path=/docs/components-tablist--docs)**: Replaces `Pivot` for tabbed navigation.
- **[ProgressBar](https://storybooks.fluentui.dev/react/?path=/docs/components-progressbar--docs)**: Renamed from `ProgressIndicator`, with similar functionality but refined API.
- **[Input](https://storybooks.fluentui.dev/react/?path=/docs/components-input--docs)**: A new input component replacing `TextField` for simpler text input handling.
- **[Skeleton](https://storybooks.fluentui.dev/react/?path=/docs/components-skeleton--docs)**: A new input component replacing `Shimmer`.
- **[Switch](https://storybooks.fluentui.dev/react/?path=/docs/components-switch--docs)**: A new component replacing `Toggle` for binary options.
- **[SwatchPicker](https://storybooks.fluentui.dev/react/?path=/docs/components-swatchpicker--docs)**: A new component replacing `SwatchColorPicker` with added functionality.
- **[Toast](https://storybooks.fluentui.dev/react/?path=/docs/components-badge-presencebadge--docs)**: A Toasts displays temporary content to the user.
- **[TeachingPopover](https://storybooks.fluentui.dev/react/?path=/docs/components-teachingpopover--docs)**: A new component in v9 that replaces `TeachingBubble` and `Coachmark` in v8.

## Deprecated Components

Some components in React v8 are not present in v9 or been replaced. Here's a list of deprecated components:

- Coachmark
- ActivityItem
- Hovercard
- MarqueeSelection
- ResizeGroup
- ScrollablePane
- DetailsList
- Pickers
- Popup

## Additional Resources

For more information on Fluent UI v9, consult these resources:

- [Fluent UI Extensions Packages](https://github.com/microsoft/fluentui-contrib)
- [Fluent 2 Design System Website](https://fluent2.microsoft.design/)
- [Fluent UI GitHub](https://github.com/microsoft/fluentui)

---

**Source**: [Fluent UI React Component Mapping Documentation](https://storybooks.fluentui.dev/react/?path=/docs/concepts-migration-from-v8-component-mapping--docs)

