package potato.potaton.backend.util;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.squareup.okhttp.OkHttpClient;
import com.squareup.okhttp.Request;
import com.squareup.okhttp.Response;
import org.apache.coyote.BadRequestException;
import org.springframework.stereotype.Component;
import potato.potaton.backend.dto.GpsResponseModel;
import potato.potaton.backend.dto.GpsResult;

import java.io.IOException;
import java.util.ArrayList;

@Component
public class AddrAPI {

    private final OkHttpClient httpClient = new OkHttpClient();

    public String getAddrCode(String searchPoint) throws IOException {
        //level4LC
        //String point = "127.101313354,37.402352535";
        String apikey = "98183930-03AC-324F-A2FC-48C7CC2EA496";
        String searchType = "PARCEL";
//        String searchPoint = "127.101313354,37.402352535";
        String epsg = "epsg:4326";

        StringBuilder sb = new StringBuilder("https://api.vworld.kr/req/address");
        sb.append("?service=address");
        sb.append("&request=getaddress");
        sb.append("&format=json");
        sb.append("&crs=" + epsg);
        sb.append("&key=" + apikey);
        sb.append("&type=" + searchType);
        sb.append("&point=" + searchPoint);

        String urlWithParams = sb.toString();

        Request request = new Request.Builder()
                .url(urlWithParams)
                .build();

        try {
            Response response = httpClient.newCall(request).execute();
            if (response.isSuccessful() && response.body() != null) {
                GpsResponseModel responseModel = new Gson().fromJson(response.body().string(), GpsResponseModel.class);
                ArrayList<GpsResult> gpsResults = responseModel.response.result;
                if (gpsResults.isEmpty()) {
                    throw new NullPointerException("GpsResult is empty : " + response.code());
                }

                String level4 = null;
                for (GpsResult gpsResult : gpsResults) {
                    if (gpsResult.structure.level4LC == null) {
                        continue;
                    }
                    if (gpsResult.structure.level4LC.isEmpty()) {
                        continue;
                    }
                    if (gpsResult.structure.level4LC.isBlank()) {
                        continue;
                    }
                    level4 = gpsResult.structure.level4LC;
                }
                if (level4 == null) {
                    throw new NullPointerException("level4 is null : " + response.code());
                }
                return level4;
            } else {
                throw new BadRequestException("API request failed with status code: " + response.code());
            }
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }
}
