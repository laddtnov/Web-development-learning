/// <reference path="./global.d.ts" />
// @ts-check
//
// The lines above enable type checking for this file. Various IDEs interpret
// the @ts-check and reference directives. Together, they give you helpful
// autocompletion when implementing this exercise. You don't need to understand
// them in order to use it.
//
// In your own projects, files, and code, you can play with @ts-check as well.

export class TranslationService {
  constructor(api) {
    this.api = api;
  }

  free(text) {
    return this.api.fetch(text).then(res => res.translation);
  }

  batch(texts) {
    if (texts.length === 0) {
      return Promise.reject(new BatchIsEmpty());
    }
    return Promise.all(texts.map(text => this.free(text)));
  }

  request(text) {
    const makeRequest = (attempt) => {
      return new Promise((resolve, reject) => {
      
        this.api.request(text, (error) => {
          if (error) {
            return reject(error);
          }
          resolve();
        });
      }).catch(err => {
        if (attempt < 3) {
          return makeRequest(attempt + 1);
        }
        throw err;
      });
    };

    return makeRequest(1);
  }

  premium(text, minimumQuality) {
    return this.api.fetch(text)
      .catch(() => {
    
        return this.request(text).then(() => this.api.fetch(text));
      })
      .then(res => {
        if (res.quality >= minimumQuality) {
          return res.translation;
        }
        throw new QualityThresholdNotMet(text);
      });
  }
}

export class QualityThresholdNotMet extends Error {
  constructor(text) {
    super(`The translation of ${text} does not meet the requested quality threshold.`.trim());
    this.text = text;
  }
}

export class BatchIsEmpty extends Error {
  constructor() {
    super(`Requested a batch translation, but there are no texts in the batch.`.trim());
  }
}

