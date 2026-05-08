class Book < ApplicationRecord
  belongs_to :user
  has_many :reading_logs, dependent: :destroy

  validates :title, presence: true
end
