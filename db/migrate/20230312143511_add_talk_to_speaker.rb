class AddTalkToSpeaker < ActiveRecord::Migration[7.0]
  def change
    add_reference :speakers, :talk, foreign_key: true
  end
end
