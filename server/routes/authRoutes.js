const passport = require("passport");
const { signIn } = require("../controllers/authentication");
// const authentication = require("../controllers/authentication");

module.exports = app => {
  // app.get("/auth/facebook", passport.authenticate("facebook", { scope: ['user_friends', 'manage_pages'] }));
  app.post(
    "/auth/facebook/token",
    passport.authenticate("facebook-token", { session: false }),
    function(req, res, next) {
      signIn(req, res, next);
    }
  );

  // app.get(
  //   "/auth/facebook/callback",
  //   passport.authenticate("facebook", {
  //     session: false,
  //     failureRedirect: "/login"
  //   }),
  //   function(req, res) {
  //     res.redirect("/");
  //   }
  // );
};
