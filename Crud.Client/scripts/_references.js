﻿/// <autosync enabled="true" />
/// <reference path="../app/app.js" />
/// <reference path="../app/common/app.common.js" />
/// <reference path="../app/common/core/app.constants.js" />
/// <reference path="../app/common/core/app.core.js" />
/// <reference path="../app/common/core/app.customEvents.js" />
/// <reference path="../app/common/core/app.events.js" />
/// <reference path="../app/common/core/app.events.ui.js" />
/// <reference path="../app/common/core/app.exceptionsHandler.js" />
/// <reference path="../app/common/core/app.routes.js" />
/// <reference path="../app/common/core/app.routes.ui.js" />
/// <reference path="../app/common/core/cfg.app.js" />
/// <reference path="../app/common/services/app.common.services.js" />
/// <reference path="../app/common/services/custom/productCalculationsSrvc.js" />
/// <reference path="../app/common/services/mockup/productResourceMock.js" />
/// <reference path="../app/common/services/product/productModel.js" />
/// <reference path="../app/common/services/product/productResource.js" />
/// <reference path="../app/common/services/product/productService.js" />
/// <reference path="../app/common/services/productExtra/productExtraResource.js" />
/// <reference path="../app/common/services/productExtra/productService.js" />
/// <reference path="../app/common/services/shared/commonServices.js" />
/// <reference path="../app/common/services/shared/dataInterceptor.js" />
/// <reference path="../app/common/services/shared/dataPreloader.js" />
/// <reference path="../app/common/services/shared/loggerService.js" />
/// <reference path="../app/common/services/user/currentUser.js" />
/// <reference path="../app/common/services/user/userAccount.js" />
/// <reference path="../app/directives/app.directives.js" />
/// <reference path="../app/directives/preloader/preloader.js" />
/// <reference path="../app/home/app.home.js" />
/// <reference path="../app/home/route.cfg.js" />
/// <reference path="../app/home/userAccount/userAccountCtrl.js" />
/// <reference path="../app/price/analytics/priceAnalyticsCtrl.js" />
/// <reference path="../app/price/app.price.js" />
/// <reference path="../app/price/route.cfg.js" />
/// <reference path="../app/products/app.products.js" />
/// <reference path="../app/products/productDetail/productDetailCtrl.js" />
/// <reference path="../app/products/productEdit/Info/productEditInfoCtrl.js" />
/// <reference path="../app/products/productEdit/Price/productEditPriceCtrl.js" />
/// <reference path="../app/products/productEdit/productEditCtrl.js" />
/// <reference path="../app/products/productEdit/Tags/productEditTagsCtrl.js" />
/// <reference path="../app/products/productList/productListCtrl.js" />
/// <reference path="../app/products/route.cfg.js" />
/// <reference path="../app/shell/app.shell.js" />
/// <reference path="../app/shell/route.cfg.js" />
/// <reference path="../app/shell/shellCtrl.js" />
/// <reference path="../app/splashScreen/app.splash.js" />
/// <reference path="../app/splashScreen/route.cfg.js" />
/// <reference path="../app/splashScreen/userAccount/userAccountCtrl.js" />
/// <reference path="angular.js" />
/// <reference path="angular-animate.js" />
/// <reference path="angular-aria.js" />
/// <reference path="angular-chart.js" />
/// <reference path="angular-cookies.js" />
/// <reference path="angular-loader.js" />
/// <reference path="angular-message-format.js" />
/// <reference path="angular-messages.js" />
/// <reference path="angular-mocks.js" />
/// <reference path="angular-parse-ext.js" />
/// <reference path="angular-resource.js" />
/// <reference path="angular-route.js" />
/// <reference path="angular-sanitize.js" />
/// <reference path="angular-scenario.js" />
/// <reference path="angular-touch.js" />
/// <reference path="angular-ui/ui-bootstrap.js" />
/// <reference path="angular-ui/ui-bootstrap.min.js" />
/// <reference path="angular-ui/ui-bootstrap-tpls.js" />
/// <reference path="angular-ui/ui-router.js" />
/// <reference path="angular-ui/ui-utils.js" />
/// <reference path="angular-ui/ui-utils.min.js" />
/// <reference path="angular-ui/ui-utils-ieshiv.js" />
/// <reference path="angular-ui/ui-utils-ieshiv.min.js" />
/// <reference path="bootstrap.js" />
/// <reference path="chart.bundle.min.js" />
/// <reference path="d3.js" />
/// <reference path="jquery-3.1.1.js" />
/// <reference path="jquery-3.1.1.slim.js" />
/// <reference path="toastr.js" />
/// <reference path="toastr.min.js" />
/// <reference path="../src/chart.js" />
/// <reference path="../src/charts/Chart.Bar.js" />
/// <reference path="../src/charts/Chart.Bubble.js" />
/// <reference path="../src/charts/Chart.Doughnut.js" />
/// <reference path="../src/charts/Chart.Line.js" />
/// <reference path="../src/charts/Chart.PolarArea.js" />
/// <reference path="../src/charts/Chart.Radar.js" />
/// <reference path="../src/charts/Chart.Scatter.js" />
/// <reference path="../src/controllers/controller.bar.js" />
/// <reference path="../src/controllers/controller.bubble.js" />
/// <reference path="../src/controllers/controller.doughnut.js" />
/// <reference path="../src/controllers/controller.line.js" />
/// <reference path="../src/controllers/controller.polarArea.js" />
/// <reference path="../src/controllers/controller.radar.js" />
/// <reference path="../src/core/core.animation.js" />
/// <reference path="../src/core/core.canvasHelpers.js" />
/// <reference path="../src/core/core.controller.js" />
/// <reference path="../src/core/core.datasetController.js" />
/// <reference path="../src/core/core.element.js" />
/// <reference path="../src/core/core.helpers.js" />
/// <reference path="../src/core/core.interaction.js" />
/// <reference path="../src/core/core.js" />
/// <reference path="../src/core/core.layoutService.js" />
/// <reference path="../src/core/core.legend.js" />
/// <reference path="../src/core/core.plugin.js" />
/// <reference path="../src/core/core.scale.js" />
/// <reference path="../src/core/core.scaleService.js" />
/// <reference path="../src/core/core.ticks.js" />
/// <reference path="../src/core/core.title.js" />
/// <reference path="../src/core/core.tooltip.js" />
/// <reference path="../src/elements/element.arc.js" />
/// <reference path="../src/elements/element.line.js" />
/// <reference path="../src/elements/element.point.js" />
/// <reference path="../src/elements/element.rectangle.js" />
/// <reference path="../src/scales/scale.category.js" />
/// <reference path="../src/scales/scale.linear.js" />
/// <reference path="../src/scales/scale.linearbase.js" />
/// <reference path="../src/scales/scale.logarithmic.js" />
/// <reference path="../src/scales/scale.radialLinear.js" />
/// <reference path="../src/scales/scale.time.js" />
