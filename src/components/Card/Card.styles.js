// @flow

import React from "react";
import styled, { css } from 'styled-components';
import type { ComponentType } from 'react';

import addIECss from 'addIECss';

export const HalfCard: ComponentType<*> = (() => {
  return styled.article`
    flex: 1 1 43%;
    padding: 20px;
    margin: 15px;
    background-color: #f8f8f8;
    border: 1px #f3f2f1 solid;
  `;
})();


export const HalfCardHeader = ({ className, ...props }) => (
  <header className={ `util-flex util-flex-justify-between util-flex-align-items-center govuk-!-padding-bottom-2 ${className}` } { ...props }/>
);


export const HalfCardHeading = ({ className, ...props }) => (
  <h2 className={ `govuk-heading-m govuk-!-margin-bottom-0 ${className}` } { ...props }/>
);


export const HalfCardBody: ComponentType<*> = (() => {
  const
    classes = 'util-flex util-flex-wrap',
    Node = styled.div`
      margin: 0 -15px;
    `;

  return ({ className, ...props }) =>
    <Node className={ `${classes} ${className}` } { ...props }/>
})();


export const FullCard: ComponentType<*> = (() => {
  return styled.article`
    flex: 1 1 auto;
    padding: 20px;
    margin-bottom: 30px;
    background-color: #f8f8f8;
    border: 1px #f3f2f1 solid;
  `;
})();


export const FullCardHeader = ({ className, ...props }) => (
  <header className={ `util-flex util-flex-wrap util-flex-justify-between util-flex-align-items-center govuk-!-padding-bottom-2 ${className}` } { ...props }/>
);


export const FullCardHeading = ({ className, ...props }) => (
  <h2 className={ `govuk-heading-m govuk-!-margin-bottom-0 ${className}` } { ...props }/>
);


export const Caption = ({ className, ...props }) => (
  <span className={ `govuk-caption-m ${className}` } { ...props }/>
);


export const BodySection: ComponentType<*> = (() => {
    return styled.div`
      flex: 1 1 43%;
      margin: 0 15px;
    `;
})();


export const CardDescription: ComponentType<*> = (() => {
  const Node = styled.small`
    display: flex;
    color: #626a6e;
  `;

  return ({ className="", ...props }) =>
      <Node className={ `govuk-body-s govuk-!-margin-bottom-0 ${className}` }
            {...props}/>
})();


export const SectionBreak = ({ className, ...props }) => (
  <hr className={ `govuk-section-break govuk-section-break--m govuk-!-margin-top-0 govuk-section-break--visible ${className}` } { ...props }/>
);


export const DataColour: ComponentType<*> = (() => {
  return styled.span`
    float: left;
    width: 10px;
    height: 10px;
    margin: 6px 6px 6px 0;
    background: ${props => props.colour};
    border: 1px solid #000;
    box-shadow:inset 0px 0px 0px 1px #ffffff;
  `;
})();


export const DataLabel: ComponentType<*> = (() => {
  return styled.div`
    margin-left: 16px;
  `;
})();


export const LabelText = ({ className, ...props }) => (
  <p className={ `govuk-body govuk-!-margin-bottom-0 ${className}` } { ...props }/>
);


export const DataValue: ComponentType<*> = (() => {
  const
    classes = 'govuk-!-margin-bottom-4',
    Node = styled.div`
      margin-left: 16px;
    `;

  return ({ className, ...props }) =>
    <Node className={ `${classes} ${className}` } { ...props }/>
})();


export const Number = ({ className, ...props }) => (
  <h3 className={ `govuk-heading-m govuk-!-margin-bottom-2 govuk-!-padding-top-0 ${className}` } { ...props }/>
);

