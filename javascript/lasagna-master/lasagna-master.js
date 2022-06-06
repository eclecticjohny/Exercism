/// <reference path="./global.d.ts" />

import { allowedNodeEnvironmentFlags } from "process";

// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(timeOnTimer) {
  if (timeOnTimer === 0) {
    return "Lasagna is done.";
  } else if (timeOnTimer > 0) {
    return "Not done, please wait.";
  } else {
    return "You forgot to set the timer.";
  }
}

export function preparationTime(layers, avgPrepTime = 2) {
  return layers.length * avgPrepTime;
}

export function quantities(layers) {
  let noodles = 0;
  let sauce = 0;

  for (const layer of layers) {
    if (layer === "noodles") {
      noodles += 50;
    } else if (layer === "sauce") {
      sauce += 0.2;
    }
  }

  return {
    noodles,
    sauce,
  };
}

export function addSecretIngredient(friendList, ownList) {
  ownList.push(friendList[friendList.length - 1]);
}

export function scaleRecipe(recipe, scale) {
  let scaledRecipe = {};

  for (const layer in recipe) {
    scaledRecipe[layer] = recipe[layer] * (scale / 2);
  }

  return scaledRecipe;
}
