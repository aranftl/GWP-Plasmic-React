// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: x8ztdr6NwjtFcF6gdhDwfr
// Component: aBVp1OdCVQ
import * as React from "react";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_new_figma_test.module.css"; // plasmic-import: x8ztdr6NwjtFcF6gdhDwfr/projectcss
import * as sty from "./PlasmicRwBanner.module.css"; // plasmic-import: aBVp1OdCVQ/css

export const PlasmicRwBanner__VariantProps = new Array();

export const PlasmicRwBanner__ArgProps = new Array();

function PlasmicRwBanner__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <div className={classNames(defaultcss.all, sty.box__mq7Lx)}>
        <div
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.box__g6FN
          )}
        >
          {"Most popular"}
        </div>
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicRwBanner__ArgProps,
      internalVariantPropNames: PlasmicRwBanner__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicRwBanner__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicRwBanner";
  } else {
    func.displayName = `PlasmicRwBanner.${nodeName}`;
  }
  return func;
}

export const PlasmicRwBanner = Object.assign(
  // Top-level PlasmicRwBanner renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicRwBanner
    internalVariantProps: PlasmicRwBanner__VariantProps,
    internalArgProps: PlasmicRwBanner__ArgProps
  }
);

export default PlasmicRwBanner;
/* prettier-ignore-end */
