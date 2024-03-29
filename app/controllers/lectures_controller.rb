class LecturesController < ApplicationController
  before_action :set_lecture, only: %i[ show ]

  # GET /lectures or /lectures.json
  def index
    @lectures = Lecture.all
  end

  # GET /lectures/1 or /lectures/1.json
  def show
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_lecture
      @lecture = Lecture.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def lecture_params
      params.require(:lecture).permit(:title, :abstract, :speaker_id, :slots, :location)
    end
end
