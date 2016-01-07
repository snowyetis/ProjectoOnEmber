class ProjectService

  def self.create_project(params)
    self.new.create_project(params)
  end

  def create_project(params)
    @params = params

    project = Project.new(project_params)
    project.build_project_details(project_detail_params)

    project
  end

  def check_params_formatting
    #TODO Add validation here if needed
  end

  def project_params
    params.require(:project).permit(:project_name, :status, :user_id)
  end

  def project_detail_params
    params.require(:project_details).permit(:project_id, :user_id, :feature_name, :available_hours, :hours_billed, :amount)
  end


end
