const assert = require('assert');

Feature('Add Favorite Resto');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('like one Resto', async ({ I }) => {
  I.amOnPage('/');

  I.scrollTo('#restoList');
  I.wait(1);

  I.seeElement('.card');

  const firstResto = locate('.card').first();
  const firstRestoLink = locate('.card a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);

  I.click(firstRestoLink);
  I.wait(2);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('#restoFav');

  const likedRestos = await I.grabTextFrom(locate('.card').first());

  assert.strictEqual(firstRestoTitle, likedRestos);
});
