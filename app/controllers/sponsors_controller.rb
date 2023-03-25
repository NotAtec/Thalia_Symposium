class SponsorsController < ApplicationController
  before_action :set_sponsor, only: %i[ show edit update destroy ]

  # GET /sponsors or /sponsors.json
  def index
    @sponsors = Sponsor.all
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_sponsor
    @sponsor = Sponsor.friendly.find_by_slug(params[:slug])
  end
end
