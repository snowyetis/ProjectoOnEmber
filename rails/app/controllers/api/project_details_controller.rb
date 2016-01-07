class Api::ProjectDetailsController < ApplicationController
  before_action :set_project_detail, only: [:show, :edit, :update, :destroy]
  respond_to :json

  # GET /project_details
  # GET /project_details.json
  def index
    respond_with ProjectDetail.all
  end

  # GET /project_details/1
  # GET /project_details/1.json
  def show
    respond_with @project_detail
  end

  def edit
    respond_with @project_detail
  end

  def create
    @project_detail = ProjectDetail.new(project_detail_params)

    if @project_detail.save
      render json: @project_detail, status: :created, location: @project_detail
    else
      render json: @project_detail.errors, status: :unprocessable_entity
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_project_detail
      @project_detail = ProjectDetail.find(params[:id])
    end

    def project_detail_params
      params.require(:project_detail).permit(:id, :project_id, :user_id, :feature_name, :available_hours, :hours_billed, :amount)
    end

end
