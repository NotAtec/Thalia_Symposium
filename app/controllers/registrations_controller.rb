class RegistrationsController < ApplicationController
  before_action :authenticate_user!
  
  def create
    @registration = Registration.new(user: current_user, lecture: params[:id])
    if @registration.save
      redirect_to lectures_path, notice: 'You have successfully registered for this talk.'
    else
      redirect_to lectures_path, alert: 'An error has occured.'
    end
  end

  def destroy
    @registration = Registration.find(params[:id])
    if @registration.destroy
      redirect_to lectures_path, notice: 'You have successfully unregistered for this talk.'
    else
      redirect_to lectures_path, alert: 'An error has occured.'
    end
  end
end
