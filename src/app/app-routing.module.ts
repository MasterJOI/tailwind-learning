import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {FormComponent} from './components/form/form.component';
import {SpaceBetweenComponent} from './components/space-between/space-between.component';
import {ReusableClassesComponent} from './components/reusable-classes/reusable-classes.component';
import {TransformTestComponent} from './components/transform-test/transform-test.component';
import {GridTestComponent} from './components/grid-test/grid-test.component';
import {ColorOpacityComponent} from './components/color-opacity/color-opacity.component';
import {DividersTestComponent} from './components/dividers-test/dividers-test.component';
import {TransitionsComponent} from './components/transitions/transitions.component';
import {AnimationsTestComponent} from './components/animations-test/animations-test.component';
import {GradientsComponent} from './components/gradients/gradients.component';
import {InstagramStoriesComponent} from './components/instagram-stories/instagram-stories.component';
import {DarkmodeComponent} from './components/darkmode/darkmode.component';
import {RingUtilitiesComponent} from './components/ring-utilities/ring-utilities.component';
import {ExtendingVariantsComponent} from './components/extending-variants/extending-variants.component';
import {ColorPaletteExtendComponent} from './components/color-palette-extend/color-palette-extend.component';
import {MultiLineTruncationComponent} from './components/multi-line-truncation/multi-line-truncation.component';
import {
  ExtractReusableComponentsComponent
} from './components/extract-reusable-components/extract-reusable-components.component';
import {FormTestComponent} from './components/form-test/form-test.component';
import {AspectRatioComponent} from "./components/aspect-ratio/aspect-ratio.component";
import {CmsTypographyComponent} from "./components/cms-typography/cms-typography.component";
import {CssVariablesComponent} from "./components/css-variables/css-variables.component";
import {BackdropsComponent} from "./components/backdrops/backdrops.component";
import {BackgroundBlandingComponent} from "./components/background-blanding/background-blanding.component";
import {BoxDecorationBreakComponent} from "./components/box-decoration-break/box-decoration-break.component";
import {IosDesignComponent} from "./components/ios-design/ios-design.component";
import {ResponsiveGridComponent} from "./components/responsive-grid/responsive-grid.component";
import {GradientEffectsComponent} from "./components/gradient-effects/gradient-effects.component";

const routes: Route[] = [
    {
        path: 'float-labels',
        component: FormComponent,
    },
  {
    path: 'space-between',
    component: SpaceBetweenComponent,
  },
  {
    path: 'reusable-classes',
    component: ReusableClassesComponent,
  },
  {
    path: 'transform-test',
    component: TransformTestComponent,
  },
  {
    path: 'grid-test',
    component: GridTestComponent,
  },
  {
    path: 'color-opacity',
    component: ColorOpacityComponent,
  },
  {
    path: 'dividers-test',
    component: DividersTestComponent,
  },
  {
    path: 'transitions',
    component: TransitionsComponent,
  },
  {
    path: 'animations-test',
    component: AnimationsTestComponent,
  },
  {
    path: 'gradients',
    component: GradientsComponent,
  },
  {
    path: 'instagram',
    component: InstagramStoriesComponent,
  },
  {
    path: 'dark-mode',
    component: DarkmodeComponent,
  },
  {
    path: 'ring',
    component: RingUtilitiesComponent,
  },
  {
    path: 'extending-variants',
    component: ExtendingVariantsComponent,
  },
  {
    path: 'color-palette-extend',
    component: ColorPaletteExtendComponent,
  },
  {
    path: 'truncation',
    component: MultiLineTruncationComponent,
  },
  {
    path: 'extract-components',
    component: ExtractReusableComponentsComponent,
  },
  {
    path: 'form-test',
    component: FormTestComponent,
  },
  {
    path: 'aspect-ratio',
    component: AspectRatioComponent,
  },
  {
    path: 'cms-typography',
    component: CmsTypographyComponent,
  },
  {
    path: 'css-variables',
    component: CssVariablesComponent,
  },
  {
    path: 'backdrops',
    component: BackdropsComponent,
  },
  {
    path: 'background-blending',
    component: BackgroundBlandingComponent,
  },
  {
    path: 'box-decoration-break',
    component: BoxDecorationBreakComponent,
  },
  {
    path: 'ios-design',
    component: IosDesignComponent,
  },
  {
    path: 'responsive-grid',
    component: ResponsiveGridComponent,
  },
  {
    path: 'gradient-eefects',
    component: GradientEffectsComponent,
  },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {
}
