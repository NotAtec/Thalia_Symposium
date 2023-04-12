class SlotsController < ApplicationController
  before_action :authenticate_user!
  
  def create
    @registration = Slot.new(user: current_user, lecture_id: params[:id])
    if @registration.save
      redirect_to lectures_path, notice: 'You have successfully registered for this talk.'
    else
      redirect_to lectures_path, alert: 'An error has occured.'
    end
  end

  def destroy
    @registration = Slot.find(params[:id].to_i)
    if @registration.destroy
      redirect_to lectures_path, notice: 'You have successfully unregistered for this talk.'
    else
      redirect_to lectures_path, alert: 'An error has occured.'
    end
  end
end
