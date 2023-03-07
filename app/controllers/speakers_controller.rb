class SpeakersController < ApplicationController
  before_action :set_speaker, only: %i[ show edit update destroy ]

  # GET /speakers or /speakers.json
  def index
    @speakers = Speaker.all
  end

  # GET /speakers/1 or /speakers/1.json
  def show
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_speaker
    @speaker = Speaker.friendly.find_by_slug(params[:slug])
  end
end
