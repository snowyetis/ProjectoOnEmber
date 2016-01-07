class Project < ActiveRecord::Base
  belongs_to :user
  has_many :project_details

  accepts_nested_attributes_for :project_details

  :user_id
  :project_name
  :status
  # :project_url

end
