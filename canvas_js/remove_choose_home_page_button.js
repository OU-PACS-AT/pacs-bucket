// Hide Choose Home Page Buton
if (ENV.current_user_roles.indexOf('admin') !== -1) { $('#choose_home_page').hide(); }
