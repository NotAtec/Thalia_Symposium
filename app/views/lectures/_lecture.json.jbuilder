json.extract! lecture, :id, :title, :abstract, :location, :max, :speaker_id, :created_at, :updated_at
json.url lecture_url(lecture, format: :json)
