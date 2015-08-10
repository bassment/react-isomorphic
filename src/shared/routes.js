/*jshint esnext: true */

import { Route } from "react-router";
import React from "react";

import AppController from "./components/AppController.js";

export default (
  <Route handler={ AppController } path="/" />
);
