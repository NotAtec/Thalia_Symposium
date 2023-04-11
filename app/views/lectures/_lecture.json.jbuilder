json.extract! lecture, :id, :title, :abstract, :speaker_id, :slots, :location, :created_at, :updated_at
json.url lecture_url(lecture, format: :json)
