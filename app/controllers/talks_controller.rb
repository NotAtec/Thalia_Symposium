class TalksController < ApplicationController
  before_action :set_talk, only: %i[ show ]

  # GET /talks or /talks.json
  def index
    @talks = Talk.all
  end

  # GET /talks/1 or /talks/1.json
  def show
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_talk
      @talk = Talk.friendly.find_by_slug(params[:slug])
    end
end
