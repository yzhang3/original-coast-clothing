/**
 * Copyright 2019-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * Messenger For Original Coast Clothing
 * https://developers.facebook.com/docs/messenger-platform/getting-started/sample-apps/original-coast-clothing
 */

"use strict";

// Imports dependencies
const Response = require("./response"),
  i18n = require("../i18n.config"),
  config = require("./config");

module.exports = class Order {
  static handlePayload(payload) {
    let response;

    switch (payload) {
      case "TRACK_ORDER":
        response = Response.genButtonTemplate(i18n.__("order.prompt"), [
          Response.genPostbackButton(
            i18n.__("order.how_to_order"),
            "HOW_TO_ORDER"
          ),
          Response.genPostbackButton(
            i18n.__("order.cancel_order"),
            "CANCEL_ORDER"
          ),
          Response.genPostbackButton(
            i18n.__("order.edit_order"),
            "EDIT_ORDER"
          ),
          Response.genPostbackButton(
            i18n.__("order.order_track"),
            "ORDER_TRACK"
          )
        ]);
        break;

      case "HOW_TO_ORDER":
          response = Response.genButtonTemplate(i18n.__("order.prompt"), [
            {
              title: i18n.__("how_to_order.hto1"),
              payload: "HOW_TO_ORDER_1"
            },
            {
              title: i18n.__("how_to_order.hto2"),
              payload: "HOW_TO_ORDER_2"
            },
            {
              title: i18n.__("how_to_order.hto3"),
              payload: "HOW_TO_ORDER_3"
            }
          ]);
          break;

      case "CANCEL_ORDER":
        response = Response.genText(
          i18n.__("cancel_order.co1")
        );
        break;

      case "EDIT_ORDER":
        response = Response.genButtonTemplate(i18n.__("order.prompt"), [
          {
            title: i18n.__("edit_order.eo1"),
            payload: "EDIT_ORDER_1"
          },
          {
            title: i18n.__("edit_order.eo2"),
            payload: "EDIT_ORDER_2"
          },
          {
            title: i18n.__("edit_order.eo3"),
            payload: "EDIT_ORDER_3"
          },
          {
            title: i18n.__("edit_order.eo4"),
            payload: "EDIT_ORDER_4"
          }
        ]);
        break;
      case "ORDER_TRACK":
        response = Response.genButtonTemplate(i18n.__("order.prompt"), [
          {
            title: i18n.__("order_track.ot1"),
            payload: "ORDER_TRACK_1"
          },
          {
            title: i18n.__("order_track.ot2"),
            payload: "ORDER_TRACK_2"
          },
          {
            title: i18n.__("order_track.ot3"),
            payload: "ORDER_TRACK_3"
          },
          {
            title: i18n.__("order_track.ot4"),
            payload: "ORDER_TRACK_4"
          },
          {
            title: i18n.__("order_track.ot5"),
            payload: "ORDER_TRACK_5"
          }
        ]);
        break;
    }

    return response;
  }
};
