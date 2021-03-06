// @flow

import React, { Component } from 'react';

import toc from "remark-toc";
import slug from "remark-slug";
import html from "remark-html";
import remark from "remark";
import externalLink from "remark-external-links";

import axios from "axios";

import URLs from "common/urls";

import type { AccessibilityState, AccessibilityProps } from './Accessibility.types';
import {
    Loading,
    Markdown,
    Article
} from './Accessibility.styles';



export default class Accessibility extends Component<AccessibilityProps, {}> {

    #url = URLs.accessibility;

    state: AccessibilityState = {
        loading: false,
        data: []
    };

    getData = async () => {

        const
            { data } = await axios.get(this.#url, {responseType: "text"});
            remark()
                .use(toc)
                .use(slug)
                .use(externalLink)
                .use(html).process(data, (err, text) =>
                    this.setState({
                        data: err ? data : String(text),
                        loading: false
                    })
            );

    }; // getData

    componentDidMount() {

        this.setState({ loading: true }, this.getData)

    } // componentDidMount

    display() {

        const { loading, data } = this.state;

        if ( loading ) return <Loading>Loading&hellip;</Loading>

        return <Markdown dangerouslySetInnerHTML={{ __html: data }}/>

    } // display

    render(): React$Node {

        return <Article>
            { this.display() }
        </Article>

    } // render

} // Accessibility
