# Project.create(project_name: 'Test Project', status: 'started', user_id: 1)
# ProjectDetail.create(feature_name: 'Feature 1', available_hours: 68, hours_billed: 66, amount: 55.00, project_id: 1, user_id: 1)
# Invoice.create(customer_name: 'Test', project_name: 'Test Project', feature_name: 'Feature 1', hours_billed: 66)
# Dashboard.create(profile_name: 'Blarg', user_id: 1)

# user = User.new
# user.id = 1
# user.email = 'test@example.com'
# user.password = 'valid_password'
# user.password_confirmation = 'valid_password'
# user.encrypted_password = '#$taawktljasktlw4aaglj'
# user.save!

User.create([
  {email: 'green@mail.com',
   password: '12345678', password_confirmation: '12345678'},
  {email: 'pink@mail.com',
   password: '12345678', password_confirmation: '12345678'}
]) 
