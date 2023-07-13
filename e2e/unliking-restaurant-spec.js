const assert = require('assert');

Feature('Unlike Favorite Resto');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('unlike one resto', async ({ I }) => {
  I.dontSeeElement('.card');

  I.amOnPage('/');

  I.scrollTo('#restoList');
  I.wait(1);

  I.seeElement('.card');

  const firstResto = locate('.card').first();
  const firstRestoLink = locate('.card a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);

  I.click(firstRestoLink);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.scrollTo('#restoFav');
  I.wait(1);

  const likedResto = await I.grabTextFrom(
    locate('.card').first(),
  );

  assert.strictEqual(firstRestoTitle, likedResto);

  I.seeElement('.card');

  const firstLikedRestoLink = locate('.card a').first();

  I.click(firstLikedRestoLink);

  I.seeElement('#likedButton');
  I.click('#likedButton');

  I.amOnPage('/#/favorite');
  I.dontSeeElement('.card');
});
