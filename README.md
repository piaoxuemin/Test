# Test
/pangea_dental_app/app/views/users/shared/_profile_summary.html.erb
45~49
  <div class="py-5 break-words">
  <% if !user.userable.description.nil? %>
  <textarea class="text-gray-800 block text-md w-full focus:text-gray-700 focus:bg-white rounded focus:border-gray-700 transition ease-in-out focus:outline-none" name="user[designer][description]" id="user_designer_description" cols="40" rows="8" data-validate="true"><%= user.userable.description %></textarea>
  <% end %>
  </div>
    
    
/pangea_dental_app/app/assets/stylesheets/home.scss
304~306
.dropzone .dz-preview .dz-error-message {
    top: 150px!important;
}

/pangea_dental_app/app/views/users/registrations/choose_user_type.html.erb
31~35
        <div onclick="location.href='/user/checkprivacy';" >
          <%= link_to '', class: "border rounded border-gray-300 p-2 mt-3 block text-base font-medium leading-loose text-pangea-gray-text flex items-center hover:bg-pangea-blue hover:text-white hover:border-pangea-blue" do%>
            <i class="material-icons mr-2">check</i><p>Sign up as designer</p>
          <% end %>
        </div>

/pangea_dental_app/app/views/users/shared/_address_fields.html.erb
2
            @countries = CS.countries.slice(:CA, :US, :UK, :FR, :JP, :IT, :AU, :DE, :KR, :CN, :AT, :BE, :CL, :CO, :CR, :CZ, :DK, :EE, :FI, :GR, :HU, :IS, :IE, :IL, :LV, :LT, :LU, :MX, :NL, :NZ, :NO, :PL, :PT, :SK, :SI, :ES, :SE, :CH, :TR)

            https://online.immi.gov.au/elp/app
Austrilia Visa Group: ZTBDHO (Samuel Park's Family Group)  Transaction Reference Number (TRN): EGOV2SWHT1
I am Korean-Chinese. I am currently working as a software developer in Seoul. I have been working here since 2013, and the end date of my current visa is July 4, 2032.
            
    /pangea_dental_app/app/models/service_product.rb
            32~55
def minimum_fee
    mFee = 0
    service_product_fees.each do |fee|
       puts "------------"
      case service.service_code
      when "PartialDentureFrame"
        mFee = get_service_fee("frame").price
      when "CompleteDenture"
        mFee = get_service_fee("monoblock").price
      when "SurgicalGuide"
        mFee = get_service_fee("first_implant").price
      when "OrthoAppliance"
        mFee = get_service_fee("night_guard").price
      when "ThreeDimensionPrintModelDesign"
        mFee = get_service_fee("denture_base_only").price
      when "CrownAndBridge"
        mFee = get_service_fee("service_fee").price
      else
        mFee = get_service_fee("unit").price
      end
       puts "------------"
    end
    mFee
  end
