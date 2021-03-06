// Copyright 2014 Google Inc.
// All Rights Reserved.
//
// This file has been auto-generated by GenJsDeps, please do not edit.

goog.addDependency('../../research/colab/frontend/js/app.js', ['colab.app'], ['colab.params', 'goog.Promise']);
goog.addDependency('../../research/colab/frontend/js/bottompane.js', ['colab.BottomPane'], ['goog.dom', 'goog.dom.classes', 'goog.events.EventType', 'goog.fx.Dragger', 'goog.style', 'goog.ui.Button', 'goog.ui.Component']);
goog.addDependency('../../research/colab/frontend/js/cell/cell.js', ['colab.cell.Cell'], ['colab.Presence', 'colab.drive.Permissions', 'goog.dom', 'goog.dom.classes', 'goog.events', 'goog.events.EventType', 'goog.ui.Component', 'goog.ui.Container.Orientation', 'goog.ui.MenuItem', 'goog.ui.Toolbar', 'goog.ui.ToolbarButton', 'goog.ui.ToolbarMenuButton']);
goog.addDependency('../../research/colab/frontend/js/cell/cellfactory.js', ['colab.cell', 'colab.cell.CellType'], ['colab.cell.Cell', 'colab.cell.CodeCell', 'colab.cell.TextCell']);
goog.addDependency('../../research/colab/frontend/js/cell/codecell.js', ['colab.cell.CodeCell'], ['colab.cell.Cell', 'colab.cell.FormView', 'colab.cell.OutputArea', 'colab.drive.Permissions', 'colab.services', 'goog.date.DateTime', 'goog.dom', 'goog.dom.classes', 'goog.ui.MenuItem', 'goog.ui.Prompt', 'goog.ui.ToolbarSelect']);
goog.addDependency('../../research/colab/frontend/js/cell/editor.js', ['colab.cell.Editor'], ['colab.tooltip', 'goog.dom', 'goog.dom.classes', 'goog.events', 'goog.events.BrowserEvent.MouseButton', 'goog.events.EventType', 'goog.ui.Component']);
goog.addDependency('../../research/colab/frontend/js/cell/formview.js', ['colab.cell.ComboBoxFormWidget', 'colab.cell.FormView', 'colab.cell.SliderFormWidget', 'colab.cell.TextFieldFormWidget', 'colab.cell.TitleFormWidget'], ['goog.array', 'goog.dom', 'goog.dom.classes', 'goog.events.EventType', 'goog.style', 'goog.ui.Button', 'goog.ui.ComboBox', 'goog.ui.Component', 'goog.ui.MenuItem', 'goog.ui.Slider']);
goog.addDependency('../../research/colab/frontend/js/cell/formview_test.js', ['colab.testing.FormViewTest'], ['colab.cell.FormView', 'goog.testing.jsunit']);
goog.addDependency('../../research/colab/frontend/js/cell/outputarea.js', ['colab.cell.OutputArea'], ['goog.dom', 'goog.ui.AnimatedZippy', 'goog.ui.Component', 'goog.ui.Zippy', 'goog.ui.ZippyEvent']);
goog.addDependency('../../research/colab/frontend/js/cell/textcell.js', ['colab.cell.TextCell'], ['colab.cell.Cell', 'colab.cell.Editor', 'colab.drive.Permissions', 'goog.dom', 'goog.dom.classes', 'goog.events', 'goog.ui.ToolbarToggleButton']);
goog.addDependency('../../research/colab/frontend/js/cell/tooltip.js', ['colab.tooltip', 'colab.tooltip.Tooltip'], ['goog.dom', 'goog.ui.Tooltip']);
goog.addDependency('../../research/colab/frontend/js/comments.js', ['colab.Comment', 'colab.CommentsWidget', 'colab.NewComment'], ['colab.drive', 'colab.drive.Permissions', 'goog.date.relative', 'goog.dom', 'goog.dom.forms']);
goog.addDependency('../../research/colab/frontend/js/dialog.js', ['colab.dialog'], ['goog.ui.Dialog']);
goog.addDependency('../../research/colab/frontend/js/drive.js', ['colab.drive', 'colab.drive.NotebookModel'], ['colab.Error', 'colab.app', 'colab.error', 'colab.filepicker', 'colab.nbformat', 'goog.Promise', 'goog.array', 'goog.dom', 'goog.events', 'goog.ui.Dialog']);
goog.addDependency('../../research/colab/frontend/js/error.js', ['colab.Error', 'colab.error'], ['goog.debug.Error']);
goog.addDependency('../../research/colab/frontend/js/filepicker.js', ['colab.filepicker'], []);
goog.addDependency('../../research/colab/frontend/js/header.js', ['colab.Header'], ['colab.dialog', 'colab.filepicker', 'colab.nbformat', 'colab.notification', 'colab.share', 'goog.Promise', 'goog.dom', 'goog.dom.classes', 'goog.events', 'goog.ui.Menu', 'goog.ui.MenuBarRenderer', 'goog.ui.MenuItem', 'goog.ui.Option', 'goog.ui.SelectionModel', 'goog.ui.Separator', 'goog.ui.Toolbar', 'goog.ui.ToolbarButton', 'goog.ui.ToolbarMenuButton', 'goog.ui.ToolbarRenderer', 'goog.ui.ToolbarSelect', 'goog.ui.ToolbarSeparator', 'goog.ui.ToolbarToggleButton', 'goog.ui.menuBar', 'goog.ui.menuBarDecorator', 'userfeedback.api']);
goog.addDependency('../../research/colab/frontend/js/install.js', ['colab.install'], []);
goog.addDependency('../../research/colab/frontend/js/main.js', ['colab', 'colab.globalKernel', 'colab.globalNotebook'], ['colab.Header', 'colab.Notebook', 'colab.PNaClKernel', 'colab.Preferences', 'colab.app', 'colab.dialog', 'colab.drive', 'colab.drive.NotebookModel', 'colab.notification', 'colab.params', 'colab.services', 'colab.sharing.SharingState', 'goog.Promise', 'goog.array', 'goog.dom', 'goog.events', 'goog.net.cookies', 'goog.style', 'goog.ui.Dialog', 'goog.ui.ScrollFloater']);
goog.addDependency('../../research/colab/frontend/js/nbformat.js', ['colab.nbformat'], ['goog.format.JsonPrettyPrinter']);
goog.addDependency('../../research/colab/frontend/js/notebook.js', ['colab.CellDragger', 'colab.Notebook'], ['colab.BottomPane', 'colab.CommentsWidget', 'colab.Preferences', 'colab.Undo', 'colab.cell', 'colab.cell.Cell', 'colab.drive.Permissions', 'goog.array', 'goog.dom', 'goog.dom.classes', 'goog.fx.DragListDirection', 'goog.fx.DragListGroup', 'goog.fx.dom.FadeInAndShow', 'goog.fx.dom.FadeOutAndHide', 'goog.json', 'goog.ui.Component']);
goog.addDependency('../../research/colab/frontend/js/notification.js', ['colab.Notification', 'colab.notification'], ['goog.dom', 'goog.dom.classes']);
goog.addDependency('../../research/colab/frontend/js/params.js', ['colab.params'], ['goog.Promise', 'goog.style']);
goog.addDependency('../../research/colab/frontend/js/permissions.js', ['colab.drive.Permissions'], []);
goog.addDependency('../../research/colab/frontend/js/pnacl_kernel.js', ['colab.PNaClKernel'], ['colab.app']);
goog.addDependency('../../research/colab/frontend/js/preferences.js', ['colab.Preferences'], ['goog.net.Cookies']);
goog.addDependency('../../research/colab/frontend/js/presence.js', ['colab.Presence'], ['goog.array', 'goog.dom']);
goog.addDependency('../../research/colab/frontend/js/services.js', ['colab.services'], []);
goog.addDependency('../../research/colab/frontend/js/share.js', ['colab.share'], ['colab.drive']);
goog.addDependency('../../research/colab/frontend/js/sharingstate.js', ['colab.sharing', 'colab.sharing.SharingState'], ['colab.drive', 'goog.events.EventTarget']);
goog.addDependency('../../research/colab/frontend/js/undo.js', ['colab.Undo'], []);
goog.addDependency('../../research/colab/frontend/js/v1_closure.js', ['test'], ['goog.crypt.base64']);
