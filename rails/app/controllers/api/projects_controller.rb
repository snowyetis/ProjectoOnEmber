class Api::ProjectsController < ApplicationController
before_action :set_project, only: [:show, :update, :destroy]
respond_to :json

  def index
    respond_with Project.where('user_id = 1')
  end

  def show
    respond_with @project
  end

  def edit
    respond_with Project.project_details
  end

  def create
    project_attributes = params.require(:project).permit(:id, :project_name, :status, :user_id, project_details: [:id, :project_id, :user_id,
      :feature_name, :available_hours, :hours_billed, :amount] )
    project_details_params = project_attributes.delete("project_details")

    @project = Project.new(project_attributes)
    @project.project_details = project_details_params.map{|pd| ProjectDetail.new(pd)}

    # @project.user_id = current_user.id
    # @project.project_details.first.user_id = current_user.id

      if @project.save
        render json: @project, status: :created, location: @project
      else
        render json: @project.errors, status: :unprocessable_entity
      end
  end

  def update
      if @project.update
        render json: @project, status: :ok, location: @project
      else
        render json: @project.errors, status: :unprocessable_entity
      end
  end

  def destroy
    @project.destroy
    respond_to do |format|
      format.html { redirect_to projects_url, notice: 'Project was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

    def set_project
      @project = Project.find(params[:id])
    end

    def embedded_project_params
      params.require(:project).require(:id, :project_name, :status, :user_id, project_details: [:id, :project_id, :user_id,
        :feature_name, :available_hours, :hours_billed, :amount] )
    end

  end
