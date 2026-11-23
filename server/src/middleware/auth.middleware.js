// TODO: Verify the JWT from the Authorization header and attach req.user.
export function protect(req, res) {
  return res.status(501).json({
    success: false,
    message: "Authentication middleware is not implemented yet.",
  });
}

// TODO: Allow access only to the specified roles (user, artisan, collector, admin).
export function restrictTo() {
  return (req, res) =>
    res.status(501).json({
      success: false,
      message: "Role authorization is not implemented yet.",
    });
}
