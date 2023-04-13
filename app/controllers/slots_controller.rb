class SlotsController < ApplicationController
  before_action :authenticate_user!
  
  def create
    @registration = Slot.new(user: current_user, lecture_id: params[:id])
    @lecture = Lecture.find_by(id: params[:id])
    case @lecture.id
    when 2
      other_lecture = Lecture.find_by(id: 3)
    when 3
      other_lecture = Lecture.find_by(id: 2)
    when 4
      other_lecture = Lecture.find_by(id: 5)
    when 5
      other_lecture = Lecture.find_by(id: 4)
    else
      other_lecture = nil
    end

    if @registration.double_booking?(other_lecture, current_user)
      redirect_to lectures_path, alert: 'You are already registered for a talk at the same time.'
      return
    end

    if @registration.overmax?(@lecture)
      redirect_to lectures_path, alert: 'Unfortunately registrations for this talk are full.'
      return
    end

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
