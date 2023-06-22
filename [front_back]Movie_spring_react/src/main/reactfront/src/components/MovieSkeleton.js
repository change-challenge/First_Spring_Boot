import React from 'react'
import styled from 'styled-components'

const SkeletonContainer = styled.div`
    text-align: center;
    width: 250px;
    padding: 0 5px; // 좌우 간격을 줌 (여기서는 10px로 설정)
    margin: 16px;
    background-color: #e0e0e0; // 스켈레톤 색상으로 변경
    border-radius: 5px;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
`

const SkeletonImage = styled.div`
    margin-top: 10px;
    max-width: 100%;
    height: 300px; // 적절한 높이 설정
    background-color: #bdbdbd; // 스켈레톤 색상으로 변경
`

const SkeletonInfo = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    align-items: center;
`

const SkeletonTitle = styled.div`
    height: 20px; // 적절한 높이 설정
    width: 70%; // 적절한 너비 설정
    background-color: #bdbdbd; // 스켈레톤 색상으로 변경
`

const SkeletonRate = styled.div`
    height: 20px; // 적절한 높이 설정
    width: 20%; // 적절한 너비 설정
    background-color: #bdbdbd; // 스켈레톤 색상으로 변경
`

const MovieSkeleton = () => {
    return (
        <SkeletonContainer>
            <SkeletonImage />
            <SkeletonInfo>
                <SkeletonTitle />
                <SkeletonRate />
            </SkeletonInfo>
        </SkeletonContainer>
    )
}

export default MovieSkeleton
