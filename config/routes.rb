Rails.application.routes.draw do
  resources :speakers, only: [:index, :show], param: :slug
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
